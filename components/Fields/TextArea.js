export default function TextArea({ label, value, width, cols }) {
  return (
    <div className="authSection__formGroup">
      <label htmlFor="">{label}</label>
      <textarea name="" id="" cols={cols} rows="10">
        {value}
      </textarea>
    </div>
  );
}
