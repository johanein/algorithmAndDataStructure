import * as React from "react";
import "./style.css";

export default function App() {
  const [list, setList] = React.useState([]);
  const originalList = React.useRef([]);
  const timer = React.useRef(null);
  const getList = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const resp = await response.json();
    setList(resp);
    originalList.current = resp;
  };
  React.useEffect(() => {
    getList();
  }, []);

  const searchFunction = (searchValue) => {
    setList(() => {
      return originalList.current.filter(({ name }) =>
        name.includes(searchValue)
      );
    });
  };

  const handleChange = (func, timeOut) => (e) => {
    if (timer.current) clearTimeout(timer.current);
    const searchValue = e.target.value;

    timer.current = setTimeout(() => {
      func(searchValue);
    }, timeOut);
  };
  return (
    <div>
      <div>
        <input
          placeholder="search"
          onChange={handleChange(searchFunction, 2000)}
        />
      </div>
      {/* {JSON.stringify(list)} */}
      {list.map(({ id, postId, name, email, body }) => {
        return (
          <div key={id}>
            name : {name} <br />
            {/* postId : {postId} <br/>
  email : {email} <br/> */}
            body : {body} <br />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
