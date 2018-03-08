/**
 * BLOCK: meh-card
 *
 */

const { __ } = wp.i18n;
const {
	registerBlockType,
	RichText,
	MediaUpload,
	source: {
		attr,
		children
	}
} = wp.blocks;
const { Button } = wp.components;

registerBlockType( 'meh-blocks/meh-card', {
	title: __( 'meh Card' ),
	icon: 'layout',
	category: 'common',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		cardBody: {
			type: 'array',
			source: 'children',
			selector: '.card_body',
		},
		cardActions: {
			type: 'array',
			source: 'children',
			selector: '.cardActions',
		},
	},
	edit: props => {
		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;
		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
		};
		const onSelectImage = media => {
			props.setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};
		const onChangeActions = value => {
			props.setAttributes( { cardActions: value } );
		};
		const onFocusActions = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'cardActions' } ) );
		};
		const onChangeBody = value => {
			props.setAttributes( { cardBody: value } );
		};
		const onFocusBody = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'cardBody' } ) );
		};

		return (
			<div className={ props.className }>
				<div className="card__media">
					<MediaUpload
						onSelect={ onSelectImage }
						type="image"
						value={ attributes.mediaID }
						render={ ( { open } ) => (
							<Button className={ attributes.mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! attributes.mediaID ? __( 'Upload Image' ) : <img src={ attributes.mediaURL } /> }
							</Button>
						) }
					/>
				</div>
				<RichText
					tagName="h2"
					placeholder={ __( 'Write Recipe title…' ) }
					value={ attributes.title }
					onChange={ onChangeTitle }
					focus={ focusedEditable === 'title' }
					onFocus={ onFocusTitle }
				/>
				<h3>{ __( 'Body' ) }</h3>
				<RichText
					tagName="div"
					multiline="p"
					className="card_body"
					placeholder={ __( 'Write the cardBody…' ) }
					value={ attributes.cardBody }
					onChange={ onChangeBody }
					focus={ focusedEditable === 'cardBody' }
					onFocus={ onFocusBody }
				/>
				<h3>{ __( 'Actions' ) }</h3>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Write a list of cardActions…' ) }
					value={ attributes.cardActions }
					onChange={ onChangeActions }
					focus={ focusedEditable === 'cardActions' }
					onFocus={ onFocusActions }
					className="cardActions"
				/>
			</div>
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				mediaURL,
				cardActions,
				cardBody
			}
		} = props;
		return (
			<div className={ className }>
				{
					mediaURL && (
						<img className="card__media" src={ mediaURL } />
					)
				}
				<h2>
					{ title }
				</h2>
				<div className="card_body">
					{ cardBody }
				</div>
				<div className="cardActions">
					{ cardActions }
				</div>
			</div>
		);
	}
} );
