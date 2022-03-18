import React, { Component } from 'react';
import homepagesliderImg_1 from './img-1.jpg';
import homepagesliderImg_2 from './img-2.jpg';
import homepagesliderImg_3 from './img-3.jpg';

class Image extends Component{
    HomePageSliderImage() {
        const data = [
            homepagesliderImg_1, homepagesliderImg_2, homepagesliderImg_3,
        ];
        return data;
    }
}
export default Image;
