import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export default function ImageModal({onClose, state, img}) {
    return(
         <Modal
         isOpen={state}
         onRequestClose={onClose}
         style={customStyles}>
          <button onClick={onClose}>Close</button>
          {img && (
                <img src={img.urls.regular} alt={img.alt_description} />
            )}

         </Modal>
    )
}



