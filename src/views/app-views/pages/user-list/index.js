import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import Loading from 'components/shared-components/Loading'
import UserView from './UserView';
import UserEdit from './UserEdit';

import { getClient } from '../../../../redux/actions/Client';

const mapStateToProps = (state) => ({
  data: state.client?.data || [], 
  loading: state.client?.loading || false,
  error: state.client?.error || null,
});

const mapDispatchToProps = {
  getClient,
};

export class UserList extends Component {

  state = {
    userProfileVisible: false,
    userEditVisible: false,
    selectedUser: null,
  }

  componentDidMount() {
    this.props.getClient();
  }

  deleteUser = userId => {
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  }

  showUserProfile = userInfo => {
    console.log(userInfo)
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo
    });
  };
  
  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null
    });
  }


  showUserEdit = userInfo => {
    console.log(userInfo)
    this.setState({
      userEditVisible: true,
      selectedUser: userInfo
    });
    console.log(this.state.userEditVisible)
  };
  
  closeUserEditProfile = () => {
    this.setState({
      userEditVisible: false,
      selectedUser: null
    });
  }


  render() {
    const { userProfileVisible, userEditVisible, selectedUser } = this.state;
    const { data, loading, error } = this.props; 

    const tableColumns = [
      {
        title: 'User name',
        dataIndex: 'username',
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Website',
        dataIndex: 'website',
      },

      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="primary" className="mr-2" icon={<EditOutlined />} onClick={() => { this.showUserEdit(elm) }} size="small" />
            </Tooltip>
          </div>
        )
      }
    ];

    if (loading) {
      return <Loading />;
    }

    return (
      <Card bodyStyle={{ 'padding': '0px' }}>
        <Table columns={tableColumns} dataSource={data} rowKey='id' />
         <UserView data={selectedUser} visible={userProfileVisible} close={this.closeUserProfile} />
        <UserEdit data={selectedUser} visible={userEditVisible} close={this.closeUserEditProfile} />

      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
