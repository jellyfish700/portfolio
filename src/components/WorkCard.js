import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

function WorkCard (props){
  return (
    <>
     <Card className="card">
        <Swiper
            effect={'coverflow'}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper">
        {props.image.map((data) => {
        return<SwiperSlide><img src={data} class={props.classimg}/></SwiperSlide>;
        })}
        </Swiper>
        <Card.Body>
            <Card.Title class="fontSize3 tx-p3 mt-3">{props.title}</Card.Title>
            <p class="fontSize4 tx-p2">{props.skill}</p>
            <p class="fontSize4 ">{props.about}</p>
            <a class="fontSize4 tx-color" href={props.link}>{props.link}</a>
         </Card.Body>
     </Card>

    </>

  );
};

export default WorkCard;
