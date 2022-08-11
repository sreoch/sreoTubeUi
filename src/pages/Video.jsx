import React from 'react';
import styled from 'styled-components';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Comments from '../components/Comments';
import Card from '../components/Card.jsx';

const Container = styled.div`
	display: flex;
	gap: 24px;
`;

const Content = styled.div`
	flex: 5;
`;

const Recommendation = styled.div`
	flex: 2;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 13px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	cursor: pointer;
	padding: 10px 20px;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width='100%'
						height='720'
						src='https://www.youtube.com/embed/X6Y5P4J8'
						title='Youtube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>Test Video</Title>
				<Details>
					<Info>7.2m views • Aug 5, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlinedIcon /> 826
						</Button>
						<Button>
							<ThumbDownOutlinedIcon /> Dislike
						</Button>
						<Button>
							<ReplyOutlinedIcon /> Share
						</Button>
						<Button>
							<AddTaskOutlinedIcon /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src='https://nerdbear.com/wp-content/uploads/2022/03/Killua.jpg.webp' />
						<ChannelDetail>
							<ChannelName>srEo</ChannelName>
							<ChannelCounter>248k subscribers</ChannelCounter>
							<Description>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Necessitatibus adipisci dicta officia rerum minus officiis, nam
								iure asperiores quibusdam voluptas incidunt explicabo eaque.
								Voluptas, id consequuntur? In quas magnam tenetur?
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>SUBSCRIBE</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
			<Recommendation>
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
				<Card type='sm' />
			</Recommendation>
		</Container>
	);
};

export default Video;
