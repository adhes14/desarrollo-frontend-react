import Logo from '../components/Logo';
import Description from '../components/Description';
import Content from '../components/Content';
import GitHub from '../components/GitHub';

const Default = () => {
  return (
    <header className="App-header">
      <Logo />
      <Description />
      <GitHub />
      <Content />
    </header>
  );
};

export default Default;