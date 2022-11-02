
import "./header.css";

export default function Header() {
  return (
    <>
        <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Experio</span>
        <span className="headerTitleSm">An Experience Sharing Platform</span>
      </div>
      <img className="headerImg"
      src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt=""></img>
    </div>
    </>

  );
}