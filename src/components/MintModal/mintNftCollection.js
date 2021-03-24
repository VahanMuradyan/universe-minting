import Input from '../Input';
import arrow from '../../assets/images/Arrow.png'

const MintNftCollection = ({ onClick }) =>{
return(
    <div className="mintNftCollection-div">
        <div className="back-nft" onClick={() => onClick(null)}><img src={arrow} alt="back"/><span>MINT NFT</span></div>
        <h2>Mint NFT Collection</h2>
   <Input className="inp"></Input>
    </div>
)
}
export default MintNftCollection