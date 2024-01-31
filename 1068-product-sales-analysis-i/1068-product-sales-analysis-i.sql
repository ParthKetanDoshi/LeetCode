# Write your MySQL query statement below
SELECT P.product_name, S.year, S.price 
FROM Product P RIGHT JOIN Sales S
ON S.product_id = P.product_id