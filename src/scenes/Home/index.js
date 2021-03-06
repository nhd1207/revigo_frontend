import React, { Component } from "react";
import MostReviewedPlacesChart from "../../components/main/Home/MostReviewedPlacesChart";
import FeaturedPlaces from "../../components/main/Home/FeaturedPlaces";
import Layout from "../../components/helpers/Layout";
import CarouselHeader from "../../components/header/Carousel/CarouselHeader";
import AuthenContext from "../../components/context/AuthenContext";
import { getList } from "./action";
import { connect } from "react-redux";
import Cookies from "js-cookie";
class index extends Component {
  componentDidMount() {
    let params = {};
    this.props.getList(params);
  }

  componentWillMount = () => {
    const token = Cookies.get("web_token");
    if (!token) this.props.history.push("/login");
  }
  render() {
    const data = this.props.places.data;

    // const dummyMovies = [
    //   {
    //     ID: 1,
    //     name: "Phú Quốc",
    //     address: "Phú Quốc cách thành phố 30km",
    //     province: "Phú Quốc",
    //     picture:
    //       "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1549877055589-1500x1125-FIT_AND_TRIM-d64887b59ca65db37bef37d629e6d80d.jpeg?_src=imagekit&tr=c-at_max,h-400,q-40,w-1024",
    //     totalReview: 900,
    //     content:
    //       "Phú Quốc là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 2,
    //     name: "Nha Trang",
    //     address: "Nha Trang cách thành phố 30km",
    //     province: "khánh Hoà",
    //     picture:
    //       "https://media-cdn.tripadvisor.com/media/photo-s/1a/26/c0/ec/getlstd-property-photo.jpg",
    //     totalReview: 800,
    //     content:
    //       "Nha Trang là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 3,
    //     name: "Hồ Chí Minh",
    //     address: "Hồ Chí Minh nằm ở 30km cách thành phố",
    //     province: "Hồ Chí Minh",
    //     picture:
    //       "https://lp-cms-production.imgix.net/image_browser/Ho%20Chi%20Minh%20City%20skyline.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    //     totalReview: 700,
    //     content:
    //       "Nha Trang là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 4,
    //     name: "Đà Lạt",
    //     address: "Đà Lạt nằm ở 30km cách thành phố",
    //     province: "Đà Lạt",
    //     picture:
    //       "https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/locations/fur1616991815.png",
    //     totalReview: 600,
    //     content:
    //       "Đà Lạt là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 5,
    //     name: "Gia Lai",
    //     address: "Gia Lai nằm ở 30km cách thành phố",
    //     province: "Gia Lai",
    //     picture:
    //       "https://img.peapix.com/95a51ce3d4974e89be356cbce0965430_480.jpg",
    //     totalReview: 500,
    //     content:
    //       "Gia Lai là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 6,
    //     name: "Đồng Nai",
    //     address: "Đồng nai nằm ở 30km cách thành phố",
    //     province: "Đồng nai",
    //     picture:
    //       "http://noichinh.vn/dataimages/202005/original/images706789_BNCTW20.jpg",
    //     totalReview: 400,
    //     content:
    //       "Đồng Nai là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    //   {
    //     ID: 7,
    //     name: "Đà Nẵng",
    //     address: "Đà Nẵng nằm ở 30km cách thành phố",
    //     province: "Đà Nẵng",
    //     picture:
    //       "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2021/10/16/7_du-1634353732500.jpg",
    //     totalReview: 300,
    //     content:
    //       "Đà Nẵng là một địa điểm thu hút rất nhiều khách du lịch, nổi tiếng với bãi biển xinh đẹp, làn nước trong vắt. Xen kẽ sự hiện đại của thành phố chính là những sự yên bình, mát mẻ của biển cả, đồng thời cũng là nơi được đánh giá có vẻ đẹp cuốn hút khách du lịch nhất Việt Nam.",
    //   },
    // ];
    return (
      <AuthenContext.Consumer>
        {(context) => {
          context.isLoggedIn = true;
          return (
            <Layout>
              <CarouselHeader />
              <FeaturedPlaces data={data} />
              <MostReviewedPlacesChart data={data} />
            </Layout>
          );
        }}
      </AuthenContext.Consumer>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.home,
  user: state.login.user,
});

const mapDispatchToProps = (dispatch) => ({
  getList: (params) => {
    dispatch(getList(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
