import './App.css';
import Activity from './component/Activity/Activity';
import Header from './component/Header/Header';
import Question from './component/Question/Question';

function App() {
  return (
    <div className='full-website'>
      <Header></Header>
      <Activity></Activity>
      <Question></Question>

    </div>
  );
}

export default App;
