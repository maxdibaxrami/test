import React, { Component } from 'react';
import { Avatar, Drawer, Divider, Input, Form, Button, message, Spin } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	CalendarOutlined,
} from '@ant-design/icons';

export class UserEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
				name: props.data?.name || '',
				username: props.data?.username || '',
				id: props.data?.id || '',
				phone: props.data?.phone || '',
				email: props.data?.email || '',
				address: {
					street: props.data?.address?.street || '',
					suite: props.data?.address?.suite || '',
					city: props.data?.address?.city || ''
				},
			},
			loading: false,
		};
	}

	handleInputChange = (field, value) => {
		this.setState(prevState => ({
			formData: {
				...prevState.formData,
				[field]: value,
			}
		}));
	}

	handleAddressChange = (field, value) => {
		this.setState(prevState => ({
			formData: {
				...prevState.formData,
				address: {
					...prevState.formData.address,
					[field]: value,
				},
			}
		}));
	}

	handleSubmit = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false }); 
			message.success('successfully');
			this.props.close(); 
		}, 2000); 
	}

	render() {
		const { visible, close } = this.props;
		const { formData, loading } = this.state;

		return (
			<Drawer
				width={400}
				placement="right"
				onClose={close}
				closable={true}
				open={visible}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{formData.name}</h3>
					<span className="text-muted">{formData.username}</span>
				</div>
				<Divider dashed />
				<Form layout="horizontal" onFinish={this.handleSubmit}>
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<Form.Item label="Name">
						<Input 
							prefix={<UserOutlined />} 
							value={formData.name}
							onChange={(e) => this.handleInputChange('name', e.target.value)}
						/>
					</Form.Item>
					<Form.Item label="Username">
						<Input 
							prefix={<UserOutlined />} 
							value={formData.username}
							onChange={(e) => this.handleInputChange('username', e.target.value)}
						/>
					</Form.Item>
					<Form.Item label="ID">
						<Input 
							prefix={<UserOutlined />} 
							value={formData.id} 
							disabled
						/>
					</Form.Item>
					<Form.Item label="City of Birth">
						<Input 
							prefix={<CalendarOutlined />} 
							value={formData.address.city}
							onChange={(e) => this.handleAddressChange('city', e.target.value)}
						/>
					</Form.Item>

					<Divider dashed />
					<h6 className="text-muted text-uppercase mb-3">Contact</h6>
					<Form.Item label="Phone">
						<Input 
							prefix={<MobileOutlined />} 
							value={formData.phone}
							onChange={(e) => this.handleInputChange('phone', e.target.value)}
						/>
					</Form.Item>
					<Form.Item label="Email">
						<Input 
							prefix={<MailOutlined />} 
							value={formData.email}
							onChange={(e) => this.handleInputChange('email', e.target.value)}
						/>
					</Form.Item>
					<Form.Item label="Address">
						<Input 
							prefix={<CompassOutlined />} 
							value={formData.address.street}
							placeholder="Street"
							onChange={(e) => this.handleAddressChange('street', e.target.value)}
						/>
						<Input 
							value={formData.address.suite}
							placeholder="Suite"
							onChange={(e) => this.handleAddressChange('suite', e.target.value)}
							style={{ marginTop: 8 }}
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" block disabled={loading}>
							{loading ? <Spin /> : 'Save Changes'}
						</Button>
					</Form.Item>
				</Form>
			</Drawer>
		);
	}
}

export default UserEdit;