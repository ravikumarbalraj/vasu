SELECT `points`, 
       `student_id`, 
       `exam_given`, 
       `name`, 
       `rank`, 
       `photo` 
FROM   (SELECT Round(Sum(`percent`) / ((SELECT Count(`id`) 
                                        FROM   `exam_results` 
                                        WHERE  `student_id` = 
                                               `ExamResult`.`student_id` 
                                               AND `finalized_time` IS NOT NULL) 
                                      ), 2) 
                      AS 
               `points`, 
               `student_id`, 
               (SELECT Count(`id`) 
                FROM   `exam_results` 
                WHERE  `student_id` = `ExamResult`.`student_id` 
                       AND `finalized_time` IS NOT NULL) 
                      AS `exam_given`, 
               `Student`.`name`, 
               `Student`.`photo`, 
               Find_in_set((SELECT Round(Sum(`percent`) / ((SELECT Count(`id`) 
                                                            FROM 
                                         `exam_results` 
                                                            WHERE 
                                         `student_id` = 
       `ExamResult`.`student_id` 
       AND `finalized_time` IS NOT 
           NULL)), 2)), (SELECT 
       Group_concat(Cast(`total` AS CHAR)) 
                         FROM   ( 
       SELECT DISTINCT( Round(Sum(`percent`) / (SELECT Count(`id`) 
       FROM   `exam_results` 
       WHERE 
       `student_id` = 
       `ExamResult`.`student_id` 
       AND `finalized_time` IS NOT 
       NULL), 2) ) `total` 
       FROM 
       `exam_results` AS `ExamResult` 
       GROUP  BY `student_id` 
       ORDER  BY 1 DESC) AS avg_percent)) 
                          AS `rank` 
        FROM   `exam_results` AS `ExamResult` 
               INNER JOIN `students` AS `Student` 
                       ON `ExamResult`.`student_id` = `Student`.`id` 
        WHERE  `finalized_time` IS NOT NULL 
        GROUP  BY `student_id`) `Selection` 
ORDER  BY `points` DESC 
LIMIT  10 