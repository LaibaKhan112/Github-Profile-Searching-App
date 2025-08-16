import React, { useState, useRef, useEffect } from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import Card from './Components/Card'
import Circle from './Components/circle';

function App() {
  const [input, setInput] = useState("");
  const typingId = useRef(null)

  const [userData, setData] = useState({})
  let [loading, setLoading] = useState(false)

  function onChangeFunction(e) {

    if (typingId.current) {
      clearTimeout(typingId.current)
    }

    typingId.current = setTimeout(() => {
      console.log(e.target.value);
      setInput(e.target.value)
    }, 500);
  }



async function clickHandle(input) {
  setLoading(true)
  const api = await fetch(`https://api.github.com/users/${input}`)
  const data = await api.json()
  console.log(data);
  setData(data)
  setLoading(false)

}

return (
  <>

    <div className='w-full h-screen bg-slate-500 flex justify-center items-center'>
      <div className='bg-slate-300  w-2/4 rounded-md flex flex-col p-4 pt-5'>

        {/* Top div */}
        <div className=' flex gap-3 justify-center'>
          <Input onChangeFunction={onChangeFunction} />
          <Button clickHandle={() => clickHandle(input)} />
        </div>

        {/* Bottom Div */}
        <div className=' flex justify-center items-center'>
          {loading ? <p>Loading...</p> : <Card name={userData.name} username={userData.login} img_link={userData.avatar_url} />}

        </div>

        {!loading && userData.login && (
          <div className='p-3 flex gap-4 justify-around'>
            <Circle value={userData.followers} paraText="Followers" />
            <Circle value={userData.following} paraText="Following" />
            <Circle value={userData.public_repos} paraText="Repos" />
          </div>
        )}


      </div>
    </div>

  </>
)
}

export default App