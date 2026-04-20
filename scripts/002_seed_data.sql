-- Seed categories
INSERT INTO categories (name, slug, description, icon, color, product_count) VALUES
  ('Binance USDT', 'binance-usdt', 'Buy Binance USDT gift codes for crypto trading', 'cryptocurrency', '#F3BA2F', 8),
  ('Steam', 'steam', 'Steam wallet gift cards for gaming', 'gamepad', '#1B2838', 6),
  ('PlayStation', 'playstation', 'PlayStation Store gift cards', 'gamepad', '#003791', 5),
  ('Xbox', 'xbox', 'Xbox gift cards for games and subscriptions', 'gamepad', '#107C10', 5),
  ('Netflix', 'netflix', 'Netflix subscription gift cards', 'tv', '#E50914', 4),
  ('Spotify', 'spotify', 'Spotify Premium gift cards', 'music', '#1DB954', 4),
  ('Amazon', 'amazon', 'Amazon gift cards for everything', 'shopping-bag', '#FF9900', 6),
  ('Apple', 'apple', 'App Store & iTunes gift cards', 'smartphone', '#555555', 5),
  ('Google Play', 'google-play', 'Google Play gift cards for apps and games', 'smartphone', '#34A853', 5),
  ('Uber', 'uber', 'Uber ride & Uber Eats gift cards', 'car', '#000000', 4),
  ('DoorDash', 'doordash', 'DoorDash food delivery gift cards', 'utensils', '#FF3008', 4),
  ('Roblox', 'roblox', 'Robux gift cards for Roblox', 'gamepad', '#E2231A', 5)
ON CONFLICT (slug) DO NOTHING;

-- Seed products for Binance USDT
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $1', 'binance-usdt-1', 'Instant delivery Binance USDT code', 1.00, NULL, '#F3BA2F', false),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $5', 'binance-usdt-5', 'Instant delivery Binance USDT code', 5.00, NULL, '#F3BA2F', false),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $10', 'binance-usdt-10', 'Instant delivery Binance USDT code', 10.00, NULL, '#F3BA2F', true),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $25', 'binance-usdt-25', 'Instant delivery Binance USDT code', 25.00, NULL, '#F3BA2F', true),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $50', 'binance-usdt-50', 'Instant delivery Binance USDT code', 50.00, NULL, '#F3BA2F', true),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $100', 'binance-usdt-100', 'Instant delivery Binance USDT code', 100.00, NULL, '#F3BA2F', true),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $250', 'binance-usdt-250', 'Instant delivery Binance USDT code', 250.00, NULL, '#F3BA2F', false),
  ((SELECT id FROM categories WHERE slug = 'binance-usdt'), 'Binance USDT $500', 'binance-usdt-500', 'Instant delivery Binance USDT code', 500.00, NULL, '#F3BA2F', false)
ON CONFLICT DO NOTHING;

-- Seed products for Steam
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'steam'), 'Steam $10', 'steam-10', 'Steam Wallet gift card', 10.00, NULL, '#1B2838', false),
  ((SELECT id FROM categories WHERE slug = 'steam'), 'Steam $20', 'steam-20', 'Steam Wallet gift card', 20.00, NULL, '#1B2838', true),
  ((SELECT id FROM categories WHERE slug = 'steam'), 'Steam $50', 'steam-50', 'Steam Wallet gift card', 50.00, NULL, '#1B2838', true),
  ((SELECT id FROM categories WHERE slug = 'steam'), 'Steam $100', 'steam-100', 'Steam Wallet gift card', 100.00, NULL, '#1B2838', false)
ON CONFLICT DO NOTHING;

-- Seed products for PlayStation
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'playstation'), 'PlayStation $10', 'playstation-10', 'PlayStation Store gift card', 10.00, NULL, '#003791', false),
  ((SELECT id FROM categories WHERE slug = 'playstation'), 'PlayStation $25', 'playstation-25', 'PlayStation Store gift card', 25.00, NULL, '#003791', true),
  ((SELECT id FROM categories WHERE slug = 'playstation'), 'PlayStation $50', 'playstation-50', 'PlayStation Store gift card', 50.00, NULL, '#003791', true),
  ((SELECT id FROM categories WHERE slug = 'playstation'), 'PlayStation $100', 'playstation-100', 'PlayStation Store gift card', 100.00, NULL, '#003791', false)
ON CONFLICT DO NOTHING;

-- Seed products for Xbox
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'xbox'), 'Xbox $10', 'xbox-10', 'Xbox gift card', 10.00, NULL, '#107C10', false),
  ((SELECT id FROM categories WHERE slug = 'xbox'), 'Xbox $25', 'xbox-25', 'Xbox gift card', 25.00, NULL, '#107C10', true),
  ((SELECT id FROM categories WHERE slug = 'xbox'), 'Xbox $50', 'xbox-50', 'Xbox gift card', 50.00, NULL, '#107C10', true),
  ((SELECT id FROM categories WHERE slug = 'xbox'), 'Xbox $100', 'xbox-100', 'Xbox gift card', 100.00, NULL, '#107C10', false)
ON CONFLICT DO NOTHING;

-- Seed products for Netflix
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'netflix'), 'Netflix $15', 'netflix-15', 'Netflix gift card', 15.00, NULL, '#E50914', false),
  ((SELECT id FROM categories WHERE slug = 'netflix'), 'Netflix $25', 'netflix-25', 'Netflix gift card', 25.00, NULL, '#E50914', true),
  ((SELECT id FROM categories WHERE slug = 'netflix'), 'Netflix $50', 'netflix-50', 'Netflix gift card', 50.00, NULL, '#E50914', true),
  ((SELECT id FROM categories WHERE slug = 'netflix'), 'Netflix $100', 'netflix-100', 'Netflix gift card', 100.00, NULL, '#E50914', false)
ON CONFLICT DO NOTHING;

-- Seed products for Spotify
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'spotify'), 'Spotify $10', 'spotify-10', 'Spotify Premium gift card', 10.00, NULL, '#1DB954', false),
  ((SELECT id FROM categories WHERE slug = 'spotify'), 'Spotify $30', 'spotify-30', 'Spotify Premium gift card', 30.00, NULL, '#1DB954', true),
  ((SELECT id FROM categories WHERE slug = 'spotify'), 'Spotify $60', 'spotify-60', 'Spotify Premium gift card', 60.00, NULL, '#1DB954', true)
ON CONFLICT DO NOTHING;

-- Seed products for Amazon
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'amazon'), 'Amazon $10', 'amazon-10', 'Amazon gift card', 10.00, NULL, '#FF9900', false),
  ((SELECT id FROM categories WHERE slug = 'amazon'), 'Amazon $25', 'amazon-25', 'Amazon gift card', 25.00, NULL, '#FF9900', true),
  ((SELECT id FROM categories WHERE slug = 'amazon'), 'Amazon $50', 'amazon-50', 'Amazon gift card', 50.00, NULL, '#FF9900', true),
  ((SELECT id FROM categories WHERE slug = 'amazon'), 'Amazon $100', 'amazon-100', 'Amazon gift card', 100.00, NULL, '#FF9900', false)
ON CONFLICT DO NOTHING;

-- Seed products for Apple
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'apple'), 'Apple $10', 'apple-10', 'App Store & iTunes gift card', 10.00, NULL, '#555555', false),
  ((SELECT id FROM categories WHERE slug = 'apple'), 'Apple $25', 'apple-25', 'App Store & iTunes gift card', 25.00, NULL, '#555555', true),
  ((SELECT id FROM categories WHERE slug = 'apple'), 'Apple $50', 'apple-50', 'App Store & iTunes gift card', 50.00, NULL, '#555555', true),
  ((SELECT id FROM categories WHERE slug = 'apple'), 'Apple $100', 'apple-100', 'App Store & iTunes gift card', 100.00, NULL, '#555555', false)
ON CONFLICT DO NOTHING;

-- Seed products for Google Play
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'google-play'), 'Google Play $10', 'google-play-10', 'Google Play gift card', 10.00, NULL, '#34A853', false),
  ((SELECT id FROM categories WHERE slug = 'google-play'), 'Google Play $25', 'google-play-25', 'Google Play gift card', 25.00, NULL, '#34A853', true),
  ((SELECT id FROM categories WHERE slug = 'google-play'), 'Google Play $50', 'google-play-50', 'Google Play gift card', 50.00, NULL, '#34A853', true),
  ((SELECT id FROM categories WHERE slug = 'google-play'), 'Google Play $100', 'google-play-100', 'Google Play gift card', 100.00, NULL, '#34A853', false)
ON CONFLICT DO NOTHING;

-- Seed products for Uber
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'uber'), 'Uber $15', 'uber-15', 'Uber ride & Uber Eats gift card', 15.00, NULL, '#000000', false),
  ((SELECT id FROM categories WHERE slug = 'uber'), 'Uber $25', 'uber-25', 'Uber ride & Uber Eats gift card', 25.00, NULL, '#000000', true),
  ((SELECT id FROM categories WHERE slug = 'uber'), 'Uber $50', 'uber-50', 'Uber ride & Uber Eats gift card', 50.00, NULL, '#000000', true)
ON CONFLICT DO NOTHING;

-- Seed products for DoorDash
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'doordash'), 'DoorDash $15', 'doordash-15', 'DoorDash delivery gift card', 15.00, NULL, '#FF3008', false),
  ((SELECT id FROM categories WHERE slug = 'doordash'), 'DoorDash $25', 'doordash-25', 'DoorDash delivery gift card', 25.00, NULL, '#FF3008', true),
  ((SELECT id FROM categories WHERE slug = 'doordash'), 'DoorDash $50', 'doordash-50', 'DoorDash delivery gift card', 50.00, NULL, '#FF3008', true)
ON CONFLICT DO NOTHING;

-- Seed products for Roblox
INSERT INTO products (category_id, name, slug, description, price, original_price, color, featured) VALUES
  ((SELECT id FROM categories WHERE slug = 'roblox'), 'Roblox $10', 'roblox-10', 'Robux gift card', 10.00, NULL, '#E2231A', false),
  ((SELECT id FROM categories WHERE slug = 'roblox'), 'Roblox $25', 'roblox-25', 'Robux gift card', 25.00, NULL, '#E2231A', true),
  ((SELECT id FROM categories WHERE slug = 'roblox'), 'Roblox $50', 'roblox-50', 'Robux gift card', 50.00, NULL, '#E2231A', true)
ON CONFLICT DO NOTHING;
