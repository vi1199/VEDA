import React, {Component} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { getAllEnquiries, saveDetails } from '../actions';
import { randomColor } from '../util/randomColors';

class EnquiryList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
       
        this.props.dispatch(getAllEnquiries())
    }
    goToDetails = (item) => {
        this.props.dispatch(saveDetails(item))
        this.props.navigation.navigate('Details')
    }
    openDialer = (number) => {
        let no = ''
        no = `tel:${number}`
        Linking.openURL(no)
    }
    item = ({item, index}) => {
        return (
            <View style={styles.itemView}>
                <View style = {{flexDirection : 'row', flex: 1}}>
                <View style={styles.initialView}>
                    <View style={[styles.circleView, {backgroundColor  : `${randomColor(item.name)}`}]}>
                        <Text style={styles.initialStyle}>{item.name.charAt(0).toUpperCase()}</Text>
                    </View>
                </View>
                <TouchableOpacity style = {styles.infoStyle} onPress = {() =>this.goToDetails(item)}>
                    <Text style={styles.nameStyle} numberOfLines={1}>
                        {item.name}
                    </Text>
                    <Text style = {styles.detailsStyle}>
                        {item.categoryName}
                    </Text>
                    <Text style = {styles.detailsStyle}>
                        {item.location}
                    </Text>
                    <Text style = {styles.detailsStyle}>
                        {item.classLocPref}
                    </Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity style = {{alignItems : 'center'}} onPress = {() => this.openDialer(item.phoneNumber)}>
                    <Text style= {styles.detailsStyle}>{moment(item.postedOn, 'DD.MM.YYYY').startOf('day').fromNow()}</Text>
                    <View style = {{margin : 10}}>
                    <Icon name= "mobile" size = {25} color= {`${randomColor(item.name)}`} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    itemSeperator = () => (<View style={styles.seperator}/> )
    render() {
        return (
            <View>
                {
                    this.props.loading &&
                    <ActivityIndicator size = {'small'}/>
                }
                <FlatList
                    data = {this.props.enquiries.dataList}
                    renderItem = {this.item}
                    ItemSeparatorComponent = {this.itemSeperator}
                    keyExtractor = {item => item.enqId.toString()}
                />
            </View>
        )
    }
}
export const styles = StyleSheet.create({
    itemView: {
        flexDirection  : 'row',
        paddingHorizontal : 13,
        paddingVertical : 18,
        justifyContent : 'space-between',
        flex : 1
    },
    initialView : {
       
    },
    initialStyle: {
        fontSize: 20,
        fontWeight: '500',
        color : 'white'
    },
    nameStyle: {
        fontSize: 18,
        fontWeight: '500',
        flexWrap: 'wrap'
    },
    circleView : {
        height : 38, 
        width : 38, 
        borderRadius : 38 / 2,
        marginTop : 5,
        alignItems : 'center',
        justifyContent : 'center'
    },
    infoStyle: {
        marginHorizontal : 15,
       
        flex : 1
    },
    detailsStyle: {
        fontSize : 12
    },
    seperator: {
        height : 1,
        width: "100%",
        backgroundColor: "black",
    }
})
const mapStateToProps = state => ({
    enquiries: state.enquiries.data,
    loading : state.enquiries.loading
})
export default connect (mapStateToProps)(EnquiryList)