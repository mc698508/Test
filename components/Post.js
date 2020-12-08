import * as React from 'react';
class Post extends Component {
    constructor(props) {
     super(props)
     }
    render() {
     return (
     <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
     <View style={styles.userInformations}>
     <Text>this.props.post.userName</Text>
     </View>
     <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
     )
     }
    }
    export default Post