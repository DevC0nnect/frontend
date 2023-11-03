import me from "../components/me";

const me = () => {
  const [me, setMe] = useState();

  const moi = () => {
    if("you"){
      setMe("us")
    }
  }
  return {
    me,
    moi,
  };
};

export default me;
