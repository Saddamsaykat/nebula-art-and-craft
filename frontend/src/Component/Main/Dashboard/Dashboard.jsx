import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
             <div className='text-center mt-8 w-full flex justify-center items-center'>
            <div className="card w-96 glass">
                <figure><img src="https://i.postimg.cc/QNcZrBtS/1-De-Bkx8vjbump-CO-Zk-PE9-Cw.png" alt="404 Not Found!" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl"> Not Found the page</h2>
                    <p>The page you are looking for does not exist.</p>
                    <div className="card-actions justify-center">
                        <Link to="/" className='btn btn-error btn-outline'>Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;