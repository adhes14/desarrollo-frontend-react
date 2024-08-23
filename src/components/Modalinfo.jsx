import { motion } from "framer-motion";

const Modalinfo = ({ visible, message, type, onClose }) => {
  if (!visible) {
    return null;
  }
  
  return (
    <div className="modal-overlay">
      <motion.div
        className={`notification ${type}`}
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
      >
        <div>
          <h2>{type === 'success' ? 'Success!! 🎉🎉' : 'Error!! 😓😓'}</h2>
          <p>{ message }</p>
        </div>
        <button className="close-btn" onClick={ onClose }>x</button>
      </motion.div>
    </div>
  );
};

export default Modalinfo;