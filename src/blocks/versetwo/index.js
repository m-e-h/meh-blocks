/**
 * WordPress
 */
const { __ } = wp.i18n;
const { registerBlockType, RichText } = wp.blocks;


registerBlockType('meh/versetwo', {
	title: __('VerseTwo'),
	icon: 'grid-view',
	category: 'common',
	keywords: [__('meh VerseTwo'), __('Verse')],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'pre'
		}
	},

});



export const name = 'meh/versetwo';

export const settings = {
	title: __( 'VerseTwo' ),

	description: __( 'Write poetry and other literary expressions honoring all spaces and line-breaks.' ),

	icon: 'edit',

	category: 'formatting',

	keywords: [ __( 'poetry' ) ],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'pre',
		},
	},

	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attributes ) =>
					createBlock( 'meh/versetwo', attributes ),
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attributes ) =>
					createBlock( 'core/paragraph', attributes ),
			},
		],
	},

	edit( { attributes, setAttributes, className, isSelected } ) {
		const { content } = attributes;

		return (
			<RichText
				tagName="pre"
				value={ content }
				onChange={ ( nextContent ) => {
					setAttributes( {
						content: nextContent,
					} );
				} }
				placeholder={ __( 'Write…' ) }
				wrapperClassName={ className }
				formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
				isSelected={ isSelected }
			/>
		);
	},

	save( { attributes, className } ) {
		return <pre className={ className }>{ attributes.content }</pre>;
	},
};
