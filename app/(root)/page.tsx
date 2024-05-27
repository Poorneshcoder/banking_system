import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggenIn = {firstName: "Poornesh", lastName: "Pithani", email:"contact@poornesh.com"};
  return (
    <section className='home' >
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                 type="greeting"
                 title='welcome'
                 user={loggenIn?.firstName || "Guest"}
                 subtext = 'Access and manage your account and transactions efficiently.'
                />

                <TotalBalanceBox 
                 accounts={[]}
                 totalBanks={1}
                 totalCurrentBalance={1360.58}
                />
            </header>
            RECENT TRANSACTIONS
        </div>

        <RightSideBar 
         user={loggenIn}
         transactions={[]}
         banks={[{currentBalance: 1360.58},{currentBalance:2503.42}]}
        />
    </section>
  )
}

export default Home
