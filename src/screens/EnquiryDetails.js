import React, {Component} from 'react';
import { View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import {styles} from './EnquiryList';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { randomColor } from '../util/randomColors';

class EnquiryDetails extends Component {
    constructor(props) {
        super(props)
    }
    openDialer = (number) => {
        let no = ''
        no = `tel:${number}`
        Linking.openURL(no)
    }
    render() {
        return (
            <View style={styles .itemView}>
            <View style = {{flexDirection : 'row', flex: 1}}>
            <View style={styles.initialView}>
                <View style={[styles.circleView, {backgroundColor  : `${randomColor(this.props.details.name)}`}]}>
                    <Text style={styles.initialStyle}>{this.props.details.name.charAt(0).toUpperCase()}</Text>
                </View>
            </View>
            <TouchableOpacity style = {styles.infoStyle}>
                <Text style={styles.nameStyle} numberOfLines={1}>
                    {this.props.details.name}
                </Text>
                <Text style = {styles.detailsStyle}>
                    {this.props.details.categoryName}
                </Text>
                <Text style = {styles.detailsStyle}>
                    {this.props.details.location}
                </Text>
                <Text style = {styles.detailsStyle}>
                    {this.props.details.classLocPref}
                </Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style = {{alignItems : 'center'}} onPress = {() => this.openDialer(this.props.details.phoneNumber)}>
                <Text style= {styles.detailsStyle}>{moment(this.props.details.postedOn, 'DD.MM.YYYY').startOf('day').fromNow()}</Text>
                <View style = {{margin : 10}}>
                <Icon name= "mobile" size = {25} color= {`${randomColor(this.props.details.name)}`} />
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}
const mapStateToProps = state => ({
    details : state.details.data
})
export default connect(mapStateToProps)(EnquiryDetails)