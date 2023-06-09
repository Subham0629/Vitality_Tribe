import React from 'react'
import SideNavigationBar from '../Components/SideNavigationBar'
import { getCommunity } from '../Redux/CommunityReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Stats from '../Components/Stats';
import { useNavigate } from 'react-router-dom';


interface MyReducerState {
  isError: boolean;
  isLoading: boolean;
  data: any[];
}
interface RootState {
  CommunityReducer: MyReducerState;
}
const CommunityPage = () => {
  const [isOpen, setisOpen] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [data, setData] = React.useState({})
  const navigate = useNavigate()

  const handleOpen = (el: any) => {
    setData(el)
    handleOpenModal()
  }
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleRedirect = (userID:string) => {
    navigate(`/compare/${userID}`)
  }
  const dispatch = useDispatch()
  const stores = useSelector((store: RootState) => store.CommunityReducer.data)
  console.log(stores)
  React.useEffect(() => {
    getCommunity(dispatch)
  }, [])
console.log(stores);

  return (
    <div className='flex mt-[78px]'>
      <div className='fixed'>
        <SideNavigationBar obj={{ isOpen, setisOpen }} />
      </div>
      <div className={`mx-auto ${isOpen ? " ml-[400px]" : "ml-[200px]"} duration-500`}>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-8 ">
            Community
          </h1>
        </div>
        <div className='grid grid-cols-3 gap-20'>
          {stores?.map((el) =>
            <div className=" justify-between shadow-lg p-4 border border-gray-400 rounded-md">
              <div >
                <img src="data:image/png;base64,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"
                  alt="dummy" className="h-[150px] w-[150px] object-cover  mb-4 m-auto" />
              </div>
              <h4 className="text-2xl font-medium text-gray-800 mb-3">{el.user}</h4>
              <div className="flex">

                <div>
                  {/* <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={}>View Info</button> */}

                  <button
                    className="px-4 py-2 ml-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => handleOpen(el)}
                  >
                    View Info
                  </button>



                  <button className="px-4 py-2 ml-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={() => handleRedirect(el.userID)}>Compare</button>
                </div>

              </div>
            </div>

          )}

        </div>

      </div>
      {isModalOpen && (
        <div className="modal fixed top-0 left-20 w-full h-full z-50">
          <div className="modal-overlay absolute w-full h-full bg-white-900 opacity-50"></div>

          <div className="modal-container bg-white w-11/12 md:max-w-6xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-4xl font-bold">User Info</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={handleCloseModal}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M18 1.5L16.5 0 9 7.5 1.5 0 0 1.5 7.5 9 0 16.5 1.5 18 9 10.5 16.5 18 18 16.5 10.5 9z" />
                  </svg>
                </div>
              </div>

              <Stats obj={data} />


              <div className="flex justify-end pt-2">
                {/* <button
                  className="modal-close px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400"
                  onClick={handleCloseModal}
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default CommunityPage
