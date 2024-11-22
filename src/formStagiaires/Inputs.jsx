export default function Inputs({
  width="",
  placeHolder,
  value,
  type = "text",
  style = "",
  labelName="",
  name="",
  onClick,
  onChange,
  checked
}) {
  const defaultStyle =
    " rounded-md h-8 font-sans w-[] hover:shadow-blue-700/30 hover:outline-none hover:border focus:outline-none pl-2 focus:border-blue-700 hover:border-blue-700  hover:shadow-md";
  return (
    <>
      {labelName && type != "radio" && type != "checkbox" ? (
        <label className="">{labelName}</label>
      ) : (
        ""
      )}
      <input
      onChange={onChange}
        style={{ width }}
        type={type}
        name={name}
        value={value}
        className={defaultStyle + " " + style}
        placeholder={placeHolder}
        onClick={onClick}
        checked={checked}
      />
      {labelName && (type == "radio" || type == "checkbox") ? (
        <label className="">{labelName}</label>
      ) : (
        ""
      )}
    </>
  );
}
