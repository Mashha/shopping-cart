import "./homeSectionThree.css";

function HomeSectionThree() {
  return (
    <div className="home-section-three">
      <div className="home-section-three-inner">
        <div className="home-section-three-left">
          <h2>Why Plants Make You Happy</h2>
          <p>
            Plants are more than just decoration. They make our lives brighter
            simply by being in a room with us, whether clustered on window
            sills, congregated in corners or suspended from ceilings in hanging
            baskets. Their presence is therapeutic and adds color and texture to
            otherwise lifeless indoor spaces; research shows this helps us to
            refocus our energy and better manage stress.
          </p>
          <button>Learn more</button>
        </div>
        <div className="home-section-three-right">
          <img
            src="https://bloomscape.com/wp-content/uploads/2021/08/202107_Bloomscape_Lifestyle-Home-Office_0002-1536x1025.jpg?ver=580192"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSectionThree;
