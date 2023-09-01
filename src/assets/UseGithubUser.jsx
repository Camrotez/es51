import useSWR from "swr";

function UseGithubUser() {
  async function DataFetch({username}) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(newError(error));
    }
  }
  const { data, error } = useSWR(`https://api.github.com/users/Camrotez`,DataFetch);
  
  if(!data){
    return <p>Loading...</p>
  }
  return (
    <>
      <ul>
        {data.map((item, index) => {
          return <li key={item + index}>{item.id}</li>;
        })}
      </ul>
    </>
)}
export default UseGithubUser