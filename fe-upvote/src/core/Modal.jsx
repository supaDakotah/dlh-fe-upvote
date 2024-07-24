const Modal = ({ show, handleClose, handleSave }) => {
  if (!show) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newObject = {
      app: formData.get("app"),
      title: formData.get("title"),
      description: formData.get("description"),
      image: formData.get("image"),
    };
    handleSave(newObject);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">WE BUILD AMERICA #WHYBHI</span>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>
        <div className="modal-subtitle">Please fill out the form below</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>App:</label>
            <input type="text" name="app" required />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Request Title"
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              placeholder="Enter Request Description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input type="text" name="image" required />
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
