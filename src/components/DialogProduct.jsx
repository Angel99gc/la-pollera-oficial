
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLanguage } from '../hooks/useLanguage';
import NoImageAvailable from './ui/NoImageAvailable';

export const DialogProduct = ({ selectedItem, setSelectedItem }) => {
  const { language, t } = useLanguage();
  return (
    <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
      <DialogContent className="max-w-2xl bg-gray-800 border-gray-700 text-white">
        {selectedItem && (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold text-brand-orange">
                {selectedItem.name[language]}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                {
                  selectedItem.urlImage === 'default'
                    ? <NoImageAvailable />
                    : <img
                      alt={selectedItem.name[language]}
                      className="w-full h-full object-cover"
                      src={`menu/${selectedItem.urlImage}`}
                    />

                }
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">{t.common.description}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedItem.description[language]}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex bg-brand-orange text-white px-3 py-1 rounded-full font-bold mx-auto">
                    ₡{selectedItem.price}
                  </div>
                  {/* <button
                          onClick={() => addToCart(item)}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                        >
                          Add to Cart
                        </button> */}
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
