import { FC, ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

const icons = {
	spinner: 'spinner',
	add_20: 'add_20',
	add_circle_16: 'add_circle_16',
	add_circle_outline_24: 'add_circle_outline_24',
	add_outline_20: 'add_outline_20',
	add_square_outline_24: 'add_square_outline_24',
	arrow_down_outline_24: 'arrow_down_outline_24',
	arrow_down_to_square_outline_24: 'arrow_down_to_square_outline_24',
	arrow_right_circle_outline_24: 'arrow_right_circle_outline_24',
	arrow_squarepath_24: 'arrow_squarepath_24',
	arrow_uturn_left_outline_24: 'arrow_uturn_left_outline_24',
	arrow_uturn_right_outline_24: 'arrow_uturn_right_outline_24',
	article_box_outline_24: 'article_box_outline_24',
	block_16: 'block_16',
	block_outline_24: 'block_outline_24',
	bookmark_16: 'bookmark_16',
	bookmark_20: 'bookmark_20',
	calendar_20: 'calendar_20',
	cancel_16: 'cancel_16',
	cancel_20: 'cancel_20',
	cancel_circle_16: 'cancel_circle_16',
	check_20: 'check_20',
	check_box_off_24: 'check_box_off_24',
	check_box_on_24: 'check_box_on_24',
	check_circle_off_20: 'check_circle_off_20',
	check_circle_off_24: 'check_circle_off_24',
	check_circle_on_20: 'check_circle_on_20',
	check_circle_on_24: 'check_circle_on_24',
	check_circle_outline_24: 'check_circle_outline_24',
	check_off_20: 'check_off_20',
	check_on_20: 'check_on_20',
	check_square_outline_24: 'check_square_outline_24',
	chevron_down_20: 'chevron_down_20',
	chevron_up_20: 'chevron_up_20',
	clock_outline_24: 'clock_outline_24',
	comment_outline_24: 'comment_outline_24',
	delete_24: 'delete_24',
	done_16: 'done_16',
	done_outline_24: 'done_outline_24',
	error_16: 'error_16',
	error_circle_outline_24: 'error_circle_outline_24',
	folder_16: 'folder_16',
	folder_20: 'folder_20',
	folder_24: 'folder_24',
	folder_fill_20: 'folder_fill_20',
	folder_simple_arrow_up_outline_24: 'folder_simple_arrow_up_outline_24',
	folder_simple_lock_outline_24: 'folder_simple_lock_outline_24',
	game_outline_24: 'game_outline_24',
	gear_16: 'gear_16',
	gear_outline_24: 'gear_outline_24',
	globe_20: 'globe_20',
	globe_outline_24: 'globe_outline_24',
	hand_outline_24: 'hand_outline_24',
	headphones_16: 'headphones_16',
	help_outline_24: 'help_outline_24',
	hide_20: 'hide_20',
	hide_outline_24: 'hide_outline_24',
	history_16: 'history_16',
	history_backward_outline_24: 'history_backward_outline_24',
	key_20: 'key_20',
	like_16: 'like_16',
	like_20: 'like_20',
	like_24: 'like_24',
	like_fill_20: 'like_fill_20',
	list_bullet_outline_24: 'list_bullet_outline_24',
	location_map_outline_24: 'location_map_outline_24',
	location_outline_24: 'location_outline_24',
	lock_20: 'lock_20',
	lock_open_outline_24: 'lock_open_outline_24',
	lock_outline_24: 'lock_outline_24',
	logo_vk_20: 'logo_vk_20',
	logo_vk_24: 'logo_vk_24',
	logo_vk_fill_20: 'logo_vk_fill_20',
	logo_vk_music_outline_24: 'logo_vk_music_outline_24',
	logo_vk_outline_24: 'logo_vk_outline_24',
	logo_vk_video_outline_24: 'logo_vk_video_outline_24',
	mail_16: 'mail_16',
	mail_20: 'mail_20',
	mail_outline_24: 'mail_outline_24',
	mappin_viewfinder_outline_24: 'mappin_viewfinder_outline_24',
	menu_outline_24: 'menu_outline_24',
	message_20: 'message_20',
	message_outline_24: 'message_outline_24',
	message_unread_20: 'message_unread_20',
	message_unread_outline_24: 'message_unread_outline_24',
	music_20: 'music_20',
	music_outline_24: 'music_outline_24',
	notification_check_outline_24: 'notification_check_outline_24',
	notification_outline_24: 'notification_outline_24',
	notification_slash_outline_24: 'notification_slash_outline_24',
	palette_outline_24: 'palette_outline_24',
	pallete_16: 'pallete_16',
	pen_outline_24: 'pen_outline_24',
	phone_outline_24: 'phone_outline_24',
	place_20: 'place_20',
	place_outline_24: 'place_outline_24',
	play_circle_20: 'play_circle_20',
	poll_outline_24: 'poll_outline_24',
	question_16: 'question_16',
	radio_off_20: 'radio_off_20',
	radio_on_20: 'radio_on_20',
	recent_16: 'recent_16',
	recent_20: 'recent_20',
	repeat_outline_24: 'repeat_outline_24',
	search_20: 'search_20',
	search_outline_24: 'search_outline_24',
	share_external_outline_24: 'share_external_outline_24',
	share_outline_24: 'share_outline_24',
	shopping_cart_outline_24: 'shopping_cart_outline_24',
	shoppint_cart_16: 'shoppint_cart_16',
	sms_16: 'sms_16',
	star_16: 'star_16',
	thumbs_down_16: 'thumbs_down_16',
	thumbs_up_16: 'thumbs_up_16',
	thumbs_up_outline_24: 'thumbs_up_outline_24',
	trash_16: 'trash_16',
	unblock_outline_24: 'unblock_outline_24',
	unlock_20: 'unlock_20',
	user_add_20: 'user_add_20',
	user_add_outline_24: 'user_add_outline_24',
	user_added_outline_24: 'user_added_outline_24',
	user_check_20: 'user_check_20',
	user_circle_outline_24: 'user_circle_outline_24',
	user_edit_20: 'user_edit_20',
	user_outline_24: 'user_outline_24',
	users_16: 'users_16',
	users_outline_24: 'users_outline_24',
	view_20: 'view_20',
	view_outline_24: 'view_outline_24',
	voice_20: 'voice_20',
	voice_outline_24: 'voice_outline_24',
	volume_outline_24: 'volume_outline_24',
	warning_16: 'warning_16',
	warning_20: 'warning_20',
	warning_triangle_outline_24: 'warning_triangle_outline_24',
	write_20: 'write_20',
	write_fill_20: 'write_fill_20',
	write_outline_24: 'write_outline_24',
};

export type IconType = keyof typeof icons;

export type SVGIconProps = ComponentPropsWithRef<'svg'> & {
	icon: IconType;
};

export const Icon: FC<SVGIconProps> = ({
	className,
	icon,
	...props
}): JSX.Element => {
	return (
		<svg className={clsx('w-6 h-6 fill-current', className)} {...props}>
			<use xlinkHref={`/sprite.svg#${icon}`} />
		</svg>
	);
};