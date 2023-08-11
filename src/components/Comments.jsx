import Comment from "../components/Comment";
import NewComment from "./NewComment";

const Comments = ({ comments, setComments, fetchOneEvent }) => {
	return (
		<div className="comments">
			<h3>Comments</h3>
			{comments.map((comment) => {
				return (
					<div key={comment._id}>
						<h4>
							{" "}
							<Comment comment={comment} />
						</h4>
					</div>
				);
			})}
			<NewComment
				comments={comments}
				setComments={setComments}
				fetchOneEvent={fetchOneEvent}
			/>
		</div>
	);
};

export default Comments;
