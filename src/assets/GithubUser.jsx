import UseGithubUser from "./UseGithubUser"

function GithubUser({username}) {
    const {data, error, isLoad} = UseGithubUser(username)


    return (
        <div>
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>Errror: {error}</h1>}
            { data && <div>
                <p>Name: {data.login}</p>
                <p>Bio: {data.bio}</p>
            </div>}
        </div>
        
    )

}
export default GithubUser