import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';

const Default = () => {
  return (
    <header className="App-header">
      <Logo />
      <Description />
      <OpenLink
        title="Learn React"
        url="https://reactjs.org"
      />
      <OpenLink
        title="My React Proyect (GitHub)"
        url="https://github.com/adhes14/desarrollo-frontend-react"
      />
    </header>
  );
};

export default Default;