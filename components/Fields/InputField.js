export default function InputField({ label, value, width }) {
  return (
    <div style={{ width: width }} className="authSection__formGroup">
      <label htmlFor="">{label}</label>
      <input type="text" value={value} />
    </div>
  );
}
