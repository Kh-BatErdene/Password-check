import { Inter, Strait } from "next/font/google";
import passwordStrength from "./components/password";
import password from "./components/password";
const inter = Inter({ subsets: ["latin"] });

const isContainsNumber = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
      return 1;
    }
  }
  return 0;
};

const isContainsSpecialCharacter = (password) => {
  for (let i = 0; i < password.length; i++) {
    if (
      (password[i].charCodeAt(0) >= 33 && password[i].charCodeAt(0) <= 47) ||
      (password[i].charCodeAt(0) >= 58 && password[i].charCodeAt(0) <= 64) ||
      (password[i].charCodeAt(0) >= 91 && password[i].charCodeAt(0) <= 96) ||
      (password[i].charCodeAt(0) >= 123 && password[i].charCodeAt(0) <= 126)
    ) {
      return 1;
    }
  }
  return 0;
};
const isContainsUpperCase = (password) => {
  for (let i = 0; i < array.length; i++) {
    if (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) {
      return 1;
    }
  }
  return 0;
};
const isLengthGreaterThan8 = (password) => {
  return password.length >= 8 ? 1 : 0;
};
const calculateStrength = (password) => {
  let strength = 0;
  strength += isContainsNumber(password);
  strength += isContainsSpecialCharacter(password);
  strength += isContainsUpperCase(password);
  strength += isLengthGreaterThan8(password);
  return strength;
};

export default function Home() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <passwordStrength strength={calculateStrength(password)} />
    </div>
  );
}
