USE photo_portal;
SELECT DATEDIFF(CURDATE(), MAX(CREATION_DATE)) AS 'days since last post' FROM photo_post;