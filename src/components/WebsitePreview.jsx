import { motion } from 'framer-motion';
import { yVariants } from './Variants';
import PropTypes from 'prop-types';

const WebsitePreview = ({ url }) => {
  return (
    <motion.div
      className="w-full h-[500px] overflow-hidden border-2 border-solid border-black rounded-lg relative"
      variants={yVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <iframe
        src={url} // Replace with the desired website URL
        title="Embedded Website"
        style={{ width: '100%', height: '56vh'}} // Set height large enough to scroll
      />
    </motion.div>
  );
};

WebsitePreview.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebsitePreview;
