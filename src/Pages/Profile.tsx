import React, { useState, useEffect } from 'react';
import '../App.css';
import Hamster from '../icons/Hamster';
import { binanceLogo, dollarCoin, hamsterCoin } from '../images';
import Info from '../icons/Info';
import Settings from '../icons/Settings';
import Mine from '../icons/Mine';
import Friends from '../icons/Friends';
import Coins from '../icons/Coins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faArrowDown, faArrowUp, faUser, faTrophy, faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Profile: React.FC = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [profitPerHour, setProfitPerHour] = useState(0);
  const [points, setPoints] = useState(0);
  const [cardName, setCardName] = useState('Harsh Khambra');
  const [amount, setAmount] = useState(1000); // Example amount

  useEffect(() => {
    // Fetch or compute data here
  }, []);

  const levelNames = ['Beginner', 'Intermediate', 'Advanced'];

  const calculateProgress = () => {
    return ((levelIndex + 1) / levelNames.length) * 100;
  };

  const formatProfitPerHour = (profit: number) => {
    return `$${profit.toFixed(2)}`;
  };

  const formatAmount = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  const handleCardClick = () => {
    console.log('Card clicked');
  };

  const handleWithdraw = () => {
    alert('Withdraw action triggered');
  };

  const handleAddMoney = () => {
    alert('Add Money action triggered');
  };

  const handleTransaction = () => {
    alert('Transaction button clicked!');
  };

  return (
    <div className="bg-black flex justify-center min-h-screen">
      <div className="w-full max-w-xl bg-black text-white h-full font-bold flex flex-col">
        <div className="px-4 py-4 z-10">
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded-full bg-[#1d2025]">
              <FontAwesomeIcon icon={faUser} className="text-[#d4d4d4] text-3xl" />
            </div>
            <div>
              <p className="text-sm">Harsh (CEO)</p>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">
                    {levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span>
                  </p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-2 bg-[#43433b]/[0.6] max-w-64">
              <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
              <div className="h-8 w-0.5 bg-[#43433b] mx-2"></div>
              <div className="flex-1 text-center">
                <p className="text-xs text-[#85827d] font-medium">Profit per hour</p>
                <div className="flex items-center justify-center space-x-1">
                  <img src={dollarCoin} alt="Dollar Coin" className="w-4 h-4" />
                  <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
                  <Info size={20} className="text-[#43433b]" />
                </div>
              </div>
              <div className="h-8 w-0.5 bg-[#43433b] mx-2"></div>
              <Settings className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex-grow mt-4 bg-[#1d2025] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-2 left-0 right-0 bottom-0 bg-[#272a2f] rounded-t-[46px]">
            <div className="px-4 mt-6 flex flex-col gap-4">
              <div className="bg-[#1d2025] rounded-lg px-4 py-2 w-full">
                <div className="flex flex-col space-y-2">
                  {/* Profile Section */}
                  <div className="bg-[#272a2f] p-4 rounded-lg">
                    <p className="text-white font-semibold text-lg flex items-center">
                      <FontAwesomeIcon icon={faUser} className="text-[#d4d4d4] text-xl mr-2" />
                      {cardName}
                    </p>
                  </div>
                  
                  {/* Withdraw and Add Money Buttons */}
                  <div className="flex justify-between gap-4">
                    <button
                      className="bg-[#333] text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-[#444] transition-colors duration-300 ease-in-out"
                      onClick={handleWithdraw}
                    >
                      <FontAwesomeIcon icon={faArrowDown} className="text-[#e74c3c]" />
                      <span>Withdraw</span>
                    </button>
                    <button
                      className="bg-[#333] text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-[#444] transition-colors duration-300 ease-in-out"
                      onClick={handleAddMoney}
                    >
                      <FontAwesomeIcon icon={faArrowUp} className="text-[#2ecc71]" />
                      <span>Add Money</span>
                    </button>
                  </div>

                  {/* Amount Display */}
                  <div className="bg-[#272a2f] p-4 rounded-lg">
                    <p className="text-white text-lg font-semibold">Current Amount</p>
                    <p className="text-[#85827d] text-xl">{formatAmount(amount)}</p>
                  </div>
                  
                  {/* Achievements and Notifications */}
                  <div className="flex justify-between gap-4">
                    {/* Achievements Section */}
                    <div className="bg-[#272a2f] p-4 rounded-lg w-1/2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                      <p className="text-white text-lg font-semibold flex items-center">
                        <FontAwesomeIcon icon={faTrophy} className="text-[#d4d4d4] text-xl mr-2" />
                        Achievements
                      </p>
                      <ul className="text-[#85827d] list-disc ml-4 mt-2">
                        <li>Completed 100 tasks</li>
                        <li>Reached Level 5</li>
                      </ul>
                    </div>

                    {/* Notifications Section */}
                    <div className="bg-[#272a2f] p-4 rounded-lg w-1/2 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                      <p className="text-white text-lg font-semibold flex items-center">
                        <FontAwesomeIcon icon={faBell} className="text-[#d4d4d4] text-xl mr-2" />
                        Notifications
                      </p>
                      <ul className="text-[#85827d] list-disc ml-4 mt-2">
                        <li>New feature update available</li>
                        <li>Scheduled maintenance on Friday</li>
                      </ul>
                    </div>
                  </div>

                  {/* Transaction Button */}
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-[#333] text-white py-2 px-6 rounded-lg flex items-center space-x-2 hover:bg-[#444] transition-colors duration-300 ease-in-out"
                      onClick={handleTransaction}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="text-[#f39c12]" />
                      <span>Transaction</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fixed div */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs py-2">
          <div className="text-center text-[#85827d] w-1/5">
            <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
            <p className="mt-1">Exchange</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
            <Mine className="w-8 h-8 mx-auto" />
            <p className="mt-1">Mine</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
            <Friends className="w-8 h-8 mx-auto" />
            <p className="mt-1">Friends</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5">
            <Coins className="w-8 h-8 mx-auto" />
            <p className="mt-1">Earn</p>
          </div>
          <div className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
            <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
            <p className="mt-1">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
