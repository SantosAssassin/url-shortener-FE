import { useState } from "react";
import "./ShortUrlForm.css";

export const ShortUrlFormComponent = () => {
  const staticDomains = [
    "staticDomains1234xyzs.com",
    "staticDomains1234xyzsd.com",
  ];

  const [formData, setFormData] = useState({
    url: "",
    domainDropdown: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>URL</label>
      <br />
      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleInputChange}
        placeholder="Please enter your url to shorten"
      />
      <select onChange={handleInputChange} name="domainDropdown">
        {staticDomains.map((domain) => {
          return <option value={domain} key={domain}>
            {domain}
          </option>;
        })}
      </select>
      <br/>
      <button className="short-url-button">Shorten URL</button>
    </form>
  );
};
