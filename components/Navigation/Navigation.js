import Link from "next/link";
import styled from "styled-components";

const NavigationTotal = styled.div`
  color: #f5cf11;
  font-size: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const NavigationDiv = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  width: 900px;
`;
const Navigation = () => {
  return (
    <>
      <ul>
        <NavigationTotal>
          <NavigationDiv>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/twit-list">TWITS</Link>
            </li>
            <li>
              <Link href="/twiteros-list">TWITEROS</Link>
            </li>
          </NavigationDiv>
        </NavigationTotal>
      </ul>
    </>
  );
};

export default Navigation;
