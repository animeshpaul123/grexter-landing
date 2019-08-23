import GrexModal from "../Modals";
import "./style.css";

const CallingModal = props => {
  const { isOpen, closeModal } = props;
  return (
    <div>
      <GrexModal
        isOpen={isOpen}
        heading="Call a Grexpert"
        backdrop={true}
        color="white"
        bgColor="#292c74"
        onClose={closeModal}
        onSubmit={false}
      >
        <a href="tel:+918880968000" data-rel="external">
          <div className="calling-div">
            <img alt="phone icon" src="/static/images/phone.png" />
            <div className="calling-number">+91 8880968000</div>
          </div>
        </a>
      </GrexModal>
    </div>
  );
};

export default CallingModal;
