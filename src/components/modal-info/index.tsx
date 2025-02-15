import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { toggleDisplay } from '../../features/aboutInfo';
import { MouseEventHandler } from 'react';

function ModalInfo() {
  const linkedInProfile = 'https://www.linkedin.com/in/gustavo-gabriel-de-luca-58aa0012b';
  const githubProfile = 'https://github.com/ggdl96';

  const aboutInfo = useSelector((state: RootState) => state.aboutInfo);
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClickBackground: MouseEventHandler<HTMLDivElement> = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleDisplay());
    }
  };
  const handleOnPressClose: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(toggleDisplay());
  };

  return aboutInfo.display ? (
    <div
      className="absolute flex flex-row justify-center items-center w-full backdrop-blur-sm top-0 bottom-0 z-[100]"
      onClick={handleOnClickBackground}>
      <view className="bg-white max-w-full flex flex-col p-4 rounded-md shadow-[#00000021] shadow-sm z-[110]">
        <div className="w-full flex flex-row justify-end">
          <button onClick={handleOnPressClose}>
            <CloseIcon color="primary" />
          </button>
        </div>
        <h4>LinkedIn: </h4>
        <a className="text-link" href={linkedInProfile} target="_blank">
          {linkedInProfile}
        </a>
        <br></br>
        <h4>GitHub: </h4>
        <a className="text-link" href={githubProfile} target="_blank">
          {githubProfile}
        </a>
        <br></br>
        <h4>Email: </h4>
        <p>gustavogdeluca96@gmail.com</p>
      </view>
    </div>
  ) : null;
}

export default ModalInfo;
