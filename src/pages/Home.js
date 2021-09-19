import { Header } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HeroSection } from "../sections";

toast.configure();
const Home = ({ account, mint, totalSupply, displayPrice, loadWeb3 }) => {
  return (
    <div>
      <Header account={account} loadWeb3={loadWeb3} />
      <HeroSection
        account={account}
        mint={mint}
        totalSupply={totalSupply}
        displayPrice={displayPrice}
      />
    </div>
  );
};

export default Home;
