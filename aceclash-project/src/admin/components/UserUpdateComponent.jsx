import ModalComponent from "../../Interfaces/components/Modal"


const UserUpdateComponent = () => {
  return (
    
    <ModalComponent
    title="Update User"
    body="This is the body of the modal"
    onClose={() => console.log('Close')}
    onSave={() => console.log('Save')}
  />

  )
}

export default UserUpdateComponent
