/**
 * BLOCK: meh-tile
 *
 */

const { __ } = wp.i18n;
const { registerBlockType, RichText } = wp.blocks;

/**
 * Register: a Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 */
export default registerBlockType('meh-blocks/meh-tile', {
	title: __('meh Tile'),
	icon: 'screenoptions',
	category: 'common',
	keywords: [__('meh Tile'), __('Tile')],

	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: '.block-title'
		},
		content: {
			type: 'array',
			source: 'children',
			selector: '.block-content'
		}
	},

	/**
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: props => {
		const focusedEditable = props.focus
			? props.focus.editable || 'title'
			: null;
		const attributes = props.attributes;

		const onChangeTitle = value => {
			props.setAttributes({ title: value });
		};
		const onFocusTitle = focus => {
			props.setFocus(_.extend({}, focus, { editable: 'title' }));
		};
		const onChangeContent = value => {
			props.setAttributes({ content: value });
		};
		const onFocusContent = focus => {
			props.setFocus(_.extend({}, focus, { editable: 'content' }));
		};
		return (
			<div className={props.className}>
				<div className="arch-post u-1of2-md arch-content arch-card arch-no-link-title u-flexed-stretch o-cell u-shadow1 u-br">
					<header className="u-1of1 u-h3 u-flexed-auto u-text-display">
						<RichText
							tagName="h3"
							placeholder={__('Card title')}
							value={attributes.title}
							onChange={onChangeTitle}
							focus={focusedEditable === 'title'}
							onFocus={onFocusTitle}
							className="block-title"
						/>
					</header>
					<RichText
						tagName="div"
						placeholder={__('Card content')}
						value={attributes.content}
						onChange={onChangeContent}
						focus={focusedEditable === 'content'}
						onFocus={onFocusContent}
						className="block-content"
					/>
				</div>
			</div>
		);
	},

	/**
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: props => {
		return (
			<div className={props.className}>
				<div className="arch-post u-1of2-md arch-content arch-card arch-no-link-title u-flexed-stretch o-cell u-shadow1 u-br">
					<header className="u-1of1 u-h3 u-flexed-auto u-text-display">
						<h3 className="block-title">{props.attributes.title}</h3>
					</header>
					<div className="block-content">{props.attributes.content}</div>
				</div>
			</div>
		);
	}
});
