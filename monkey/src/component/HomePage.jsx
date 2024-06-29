import React from "react";
import "../style/homePage.css";


const HomePage = () => {
  return (
    <div className="main w-full flex text-white">
        
      <div className="homePage p-10">
        <h1 className="text-3xl font-bold text-white mt-16">
          Discover,Collect & Sell Popular <h1 className="nft">NFT</h1>{" "}
        </h1>
        <p className="mt-10">
          The world’s Biggest advanced commercial center for Crypto collectibles
          and non-fungible tokens.
        </p>
        <div className="flex gap-6 mt-10">
          <button className="bg-purple-800 text-purple-400 h-10 rounded-md w-20">Explore</button>
          <div className="rounded-2xl  bg-purple-700 w-6 h-6 mt-2">
            
          </div>
          <p className="mt-1">whatchButton</p>
        </div>
      </div>
      <div className=" right-0   p-2">
        <img
        className=" mt-10"
          src="https://s3-alpha-sig.figma.com/img/8e56/0dd1/79b1c53c3ae1f3a0fc1741193c42c8f9?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3XHUhlYlQn8WYKXE7xMpPTbpAFoMlTLy5~D6Aj6wlGtY7Rek9TvCSe0iS24Ge5uoSoFJ87o0M2~lgHGpJMYy9ksHv1haWmbxwCyRFtiHw34Y0KC8IEyE69tmBgUKbXb7IAXc-h4u5kSETpVluiOAUkcqQrP-cEs5XJpCRbYE0N24pD7YVCcS~-Kij1L~ZzHJ4EP2c3aLjpG7ByNRA8uCTsACxXcbOB5ybaf-9HDnAE~P0vDaz6fyMoJ5ipc7X45xYwUfgHjSeMjJABA2ED3qRz0ZVWcylAovP9hSJMGy8nlUFaJPVLiDBABGENBAPorfWuJAJfHae6PhXiEBos-WQ__"
          alt=""
        />
      </div>
    </div>
  );
};
export default HomePage;
