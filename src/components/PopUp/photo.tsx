import React, { FC } from "react";
import Popup from "reactjs-popup";
import { photoUrl } from "../../libs/security";

interface PhotoProps {
  img: string;
  open: boolean;
  onClose: () => void;
}

const PhotoPop: FC<PhotoProps> = (props) => {
  const { img, open, onClose } = props;
  return (
    <Popup open={open} onClose={onClose}>
      <img src={`${photoUrl}${img}-large.jpg`} alt={img} />
    </Popup>
  );
};

export default PhotoPop;
