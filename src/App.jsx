import QRcode from 'qrcode'
import { useState } from 'react'

function App() {
  
  const [url, setUrl] = useState('')
  const  [qrcode, setQrcode] = useState('')

  const GenerateQRCode = () => {
    QRcode.toDataURL(url,{
    width:800,
    margin:1,
    color:{dark:'#212c3e'}
    

  },
      (err,url)=>{
      if (err) return console.error(err)
      
      //console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className="app">
      <h1>Gerador QR Code</h1>
      <h3>Clique em Download para baixar👍</h3>
      <input type="text" placeholder="ex: www.google.com" value={url} 
      onChange={(evt) => setUrl(evt.target.value)}/>
     
      <button onClick={GenerateQRCode}>Gerar</button>
      
     { qrcode && <> <img src={qrcode}/> 
     <a href={qrcode} download ="qrcode.png">Download</a> </>}
   <footer>Criado por 🪄 <a href="https://www.linkedin.com/in/flaviofelix/">Flávio Felix</a></footer>
    </div>
  )
}

export default App
