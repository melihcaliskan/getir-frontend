const Loader = (props) => {
  return (
      <>
      <style jsx>{`
        .loader{
          display: flex;
          align-items: center; 
          justify-content: center;
          height:100vh;
        }
        .loader-img{
          animation: breathing 2s ease-out infinite normal;
          width:15%;
        }
        @media only screen and (max-width: 960px) {
          .loader-img{
            width:30%;
          }
        }
      `}</style>
      <div className="loader">
        <img className="loader-img" width="320" src="/logo-mobile.png" alt="getir" />
      </div>
      </>
  )
}

export default Loader