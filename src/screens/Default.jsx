import Logo from './_components/Logo';
import Description from './_components/Description';
import OpenLink from '../components/OpenLink';
import Lessoninfo from './_components/Lessoninfo';
import Contador from './_components/Contador';

const Default = () => {
  return (
    <header className="App-header">
      <Contador />
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
      <Lessoninfo unit="1" text="Introducción a react y estructura de proyecto" />
      <Lessoninfo unit="2" text="Context API para la gestión del estado global en aplicaciones react" />
    </header>
  );
};

export default Default;