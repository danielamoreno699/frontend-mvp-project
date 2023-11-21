
import '../styles/login.css';


 const InputForm = (props) => {
    const {label, onChange, id, errorMessage,  ...inputProps} = props;

    return (
        <>
        <input
         {...inputProps}
         onChange={onChange}
         
        />
        <span>{errorMessage}</span>
        </>
    );
};

export default InputForm;
